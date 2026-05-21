import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { Link } from "gatsby"

console.log('header');

const Header = ({ sliceContext }) => {
  const headMenu = sliceContext?.priMenuData || [];
  const options = sliceContext?.options || [];

  const [menuActive, setMenuActive] = useState(false);
  const [menuItemActive, setMenuItemActive] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);        // level 1
  const [activeSubMenu, setActiveSubMenu] = useState(null);  // level 2

  const [openMenus, setOpenMenus] = useState({});

  const [scrolled, setScrolled] = useState(false);

  const [activeMenus, setActiveMenus] = useState({
    level1: null,
    level2: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    if(typeof window !== "undefined"){
    window.addEventListener("scroll", handleScroll);
    }

    return () => typeof window !== "undefined" && window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // const toggleMenuItem = () => {
  //   setMenuItemActive(!menuItemActive);
  //   // setMenuItemActive(prev => (prev === menu ? null : menu));
  // };

  const toggleMenuItem = (parentKey, id) => {
    // setOpenMenus((prev) => ({
    //   ...prev,
    //   [id]: !prev[id],
    // }));
    setOpenMenus((prev) => ({
      ...prev,
      [parentKey]: prev[parentKey] === id ? null : id,
    }));
  };

  const toggleMainMenu = (menu) => {
    setActiveMenu(prev => (prev === menu ? null : menu));
    setActiveSubMenu(null); // reset child when parent closes
  };

  const toggleSubMenu = (submenu) => {
    setActiveSubMenu(prev => (prev === submenu ? null : submenu));
  };

  const handleMenuClick = (level, id) => {
    setActiveMenus(prev => ({
      ...prev,
      [level]: prev[level] === id ? null : id,
      ...(level === "level1" && { level2: null }) // reset child when parent changes
    }));
  };

  // const MobileMenuItem = ({ item, level = 1, parentKey = "root" }) => {
  //   const hasChildren = item.children && item.children.length > 0;
  //   const isOpen = openMenus[parentKey] === item.id;

  //   return (
  //     <li
  //       className={`level-${level} ${Array.isArray(item.cssClasses) && item.cssClasses.length
  //           ? item.cssClasses.join(" ") : ""
  //           } ${Array.isArray(item.children) && item.children.length
  //             ? "has-children menu-item-has-children" : ""}
  //           ${level < 2 ? "menu-item" : ""} ${
  //         isOpen ? "click" : ""
  //       } `}
  //     >
  //       <a
  //         href={hasChildren ? "javascript:void(0)" : item.uri}
  //         onClick={(e) => {
  //           if (hasChildren) {
  //             e.preventDefault();
  //             // toggleMenuItem(item.id);
  //             toggleMenuItem(parentKey, item.id);
  //           }
  //         }}
  //         dangerouslySetInnerHTML={{ __html: item.label }}
  //       />

  //       {hasChildren && (
  //         <ul
  //           className={`sub-menu submenu has-children-inner ${
  //             isOpen ? "show" : ""
  //           }`}
  //         >
  //           {item.children.map((item) => (
  //             <MobileMenuItem
  //               key={item.id}
  //               item={item}
  //               level={level + 1}
  //               parentKey={item.id}
  //             />
  //           ))}
  //         </ul>
  //       )}
  //     </li>
  //   );
  // };

  const MobileMenuItem = ({ item, level = 1, parentKey = "root" }) => {
    const hasChildren = item.children && item.children.length > 0;

    const isOpen = openMenus[parentKey] === item.id;

    return (
      <li
        className={`level-${level} ${Array.isArray(item.cssClasses) && item.cssClasses.length
            ? item.cssClasses.join(" ") : ""
            } ${Array.isArray(item.children) && item.children.length
              ? "has-children menu-item-has-children" : ""}
            ${level < 2 ? "menu-item" : ""} ${
          isOpen ? "click" : ""
        } `}
      >
        
        <a href="#"
          className="menu-item-row"
          onClick={() => {
            if (hasChildren) {
              toggleMenuItem(parentKey, item.id);
            }
          }}
        >
          <span
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
          
          {/* {hasChildren && <span className="arrow">{isOpen ? "-" : "+"}</span>} */}
        </a>

        {hasChildren && (
          <ul className={`sub-menu has-children-inner ${isOpen ? "show" : ""}`}>
            {item.children.map(child => (
              <MobileMenuItem
                key={child.id}
                item={child}
                level={level + 1}
                parentKey={item.id}   // 👈 CRITICAL
              />
            ))}
          </ul>
        )}
      </li>
    );
  };

  const MenuItem = ({ item, level }) => {
    const [subMenuState, setSubMenuState] = useState(false);

    return (
      <li
        className={`level-${level} ${Array.isArray(item.cssClasses) && item.cssClasses.length
          ? item.cssClasses.join(" ") : ""
          } ${Array.isArray(item.children) && item.children.length
            ? "has-children menu-item-has-children" : ""}
          ${level < 2 ? "menu-item" : ""} `}
      >
        <a
          href={
            item.children &&
              item.children.length > 0 &&
              typeof window !== "undefined" &&
              window.innerWidth < 821
              ? "/"
              : item.path
          }
          target={item.target}
          dangerouslySetInnerHTML={{ __html: item.label }}
          // onClick={(e) => toggleSubMenu(e, item.id)}
        />

        {item.children && item.children.length > 0 && (
          <SubMenu
            items={item.children}
            level={level + 1}
          />
        )}
      </li>
    );
  };

  const SubMenu = ({ items, level, isOpen }) => {
    const subMenuRef = useRef(null);

    return (
      <ul
        className={` sub-menu has-children-inner dropdown_menu in-active ${level === 2 ? "child-menu" : ""}`}
        ref={subMenuRef}
      >
        {items.map((item, index) => (
          <MenuItem item={item} key={`${index}-${level}`} level={level} />
        ))}
      </ul>
    );
  };

  return (
    <>
      <header className={`${menuActive ? "active" : ""} ${scrolled ? "scrolled" : ""}`}>
        <div className="inner-container d-flex">
          <div className="company-logo stagger-li">
            <Link to="/" className="logo-emqube pradnya"> 
              {options && (
                <img
                  className="logo-black"
                  width="196"
                  height="76"
                  src={options?.companyLogo?.mediaItemUrl}
                  alt="emQube Logo"
                />
              )}
              {options && (
                <img
                  className="logo-white"
                  width="196"
                  height="76"
                  src={options?.companyLogoWhite?.mediaItemUrl}
                  alt="emQube Logo"
                />
              )}
            </Link> 
          </div>
          <nav className="main-nav stagger-li">
            <ul className="main-nav-ul d-flex">
              {headMenu &&
                headMenu.length > 0 &&
                headMenu.map((item, index) => (
                  <MenuItem item={item} key={`${index}menu2`} level={1} />
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className={`mob-menu-click ${scrolled ? "scrolled" : ""}`} onClick={toggleMenu}>
        <svg className={`ham hamRotate ham1 nav-toggle ${menuActive ? "active" : ""}`} viewBox="0 0 100 100" width="80">
          <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"></path><path class="line middle" d="m 30,50 h 40"></path>
          <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"></path>
        </svg>
      </div>

      {/* <nav className={`main-nav menu-toggle ${menuActive ? "active" : ""}`}>
        <ul className="main-nav-ul d-flex">
          {headMenu &&
            headMenu.length > 0 &&
            headMenu.map((item, index) => (
              <MenuItem item={item} key={`${index}menu2`} level={1} />
          ))}
        </ul>
      </nav> */}

      <nav className={`main-nav menu-toggle ${menuActive ? "active" : ""}`}>
        <ul className="main-nav-ul d-flex">
          {headMenu.map((item) => (
            // <MobileMenuItem key={item.id} item={item} />
            <MobileMenuItem
              key={item.id}
              item={item}
              level={1}
              parentKey="root"
              // level={level + 1}
              // parentKey={item.id}   // 👈 important
            />
          ))}
        </ul>
      </nav>
    </>
  )
  
}


export default Header
