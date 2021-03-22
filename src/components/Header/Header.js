import './Header.sass'
import PropTypes from "prop-types";
import { Row }  from "react-bootstrap";
import { AiOutlineLeft } from "react-icons/ai"
import { HiOutlineCog } from "react-icons/hi"
import {BsSearch} from 'react-icons/bs'
import {FiShoppingCart} from "react-icons/all";

const Header = ({title}) => {
    return (
        <div>
            <Row>
                <div className="col-6">
                    <Row>
                        <div className="col-1">
                            <AiOutlineLeft id="header-back-icon" size={30}/>
                        </div>
                        <div className="col-11">
                            <h3> Title </h3>
                        </div>
                    </Row>

                </div>
                <div className="col-6">
                    <BsSearch size={30} id="icon"/>
                    <FiShoppingCart size={30}/>
                    <HiOutlineCog id="icon" size={30}/>
                </div>
            </Row>
        </div>
    );
};

Header.defaultProps = {
    title: 'Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;