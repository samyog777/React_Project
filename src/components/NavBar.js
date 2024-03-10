import React from "react";
import PropTypes from "prop-types";

export default function NavBar(props) {
    const ChangeBack = () => {
        let Color = document.querySelector("#UserColor").value;
        console.log(Color);
        let place = document.querySelector(".myclass");
        place.style.backgroundColor = Color;
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {props.title}
                    {/* {props.mode} */}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="/navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                {props.link}
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="/"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <p style={{ color: "blue" }} className=" ms-5 my-2">Choose The color</p>
                        <input type="color" className="mx-1 my-2" id="UserColor" />
                        <button className="mx-1 my-1 btn btn-info" onClick={ChangeBack}>Select</button>
                    </ul>
                    <div className="form-check form-switch">
                        <input className={`form-check-input`} onClick={props.Switch} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                        <label className="form-check-label mx-4" style={{ color: "blue" }} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <h1 id="Main">Almost</h1>
        </nav>
    );
}

// Setting Datatypes
NavBar.propTypes = {
    title: PropTypes.string.isRequired, // For Required { else error occor    }
    // link: PropTypes.string,
};

// Default Props {in case if we don't pass any}
NavBar.defaultProps = {
    title: "Lovely",
    link: "Vagg",
};
