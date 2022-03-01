import Bar from "../components/assets/ic_nav_toggle.svg";
import Logo from '../components/assets/logo-white.png';
import NotifyBell from './assets/ic_notification.svg'
import LocationIcon from './assets/ic_location_gr_2.svg'
import Learn from './assets/ic_learn.svg';
import Create from './assets/ic_create.svg';
import Connect from './assets/ic_connect.svg';
import Quote from './assets/quote-left-solid.svg'
import Member from './assets/ic_member.svg'



const LeftDivisor = () => {
    return (

        <div className="main_container">

            <div className="left__section">
                {/* bar section */}
                <div className="nav__container">
                    <div className="bar">
                        <img src={Bar} alt="" />
                    </div>
                </div>


                {/* BACKGROUND IMAGE SECTION */}
                <div className="bg__section">
                    <div className="img__section">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>

                        <div className="text__section">
                            <h1>
                                A <br /> habitat <br /> for  <br />Creativity
                            </h1>
                        </div>


                        <div className="location__section">


                            <div className="adress__icon">
                                <img src={LocationIcon} alt="" />
                            </div>
                            <div className="address">
                                <p>Rivers State ICT Center. Opp. Pleasure Park Aba Road, <br /> Port Harcourt. Rivers State, Nigeria. talk@techcreek.ng <br />
                                    <br />
                                    O9030003185, 09030003180</p>
                            </div>


                        </div>
                    </div>


                </div>

            </div>


            <div className="right__section">

                <div className="notification__section">
                    <div className="bar">
                        <p>Ongoing Applications</p>
                    </div>

                    <div className="bell__div">
                        <div className="notify__bell">
                            <img src={NotifyBell} alt="" />
                        </div>
                    </div>

                </div>


                <div className="quote-img">
                    <img src={Quote} alt="" />
                </div>

                <div className="welcome__section">
                    <div className="title">
                        <h1>
                            Welcome <br />
                            to the &lt;Creek/&gt;
                        </h1>
                    </div>

                    <div className="text">
                        <p>TechCreek is a habitat for the teeming <br /> population of youths making sense of their lives with their digital skills and competencies, <br /> and actively involved in the development of <br /> the ‘new economy’ from Rivers State</p>
                    </div>


                    <div className="icons" style={{
                        /*  display: 'flex',
                         marginTop: '12%' */
                    }
                    }>

                        <div className="learn-icon" /* style={{
                            width: '2.9rem',
                            marginRight: '3rem',
                            marginLeft: '0.4rem',
                            textAlign: 'center',
                            color: 'black'
                        }

                        } */ >
                            <img src={Learn} alt="" />
                            <p> Learn</p>
                        </div>


                        <div className="create-icon">
                            <img src={Create} alt="" /* style={{
                                width: '2.9rem',
                                marginRight: '3rem'
                            }
                            } */ />
                            <p>Create</p>
                        </div>

                        {/* connect icon */}
                        <div className="connect-icon">

                            <img src={Connect} alt="" />

                            <p>Connect</p>
                        </div>

                    </div>

                </div>


<div className="member-icon">
<img src={Member} alt="" />

</div>



            </div>
        </div>
    );
};

export default LeftDivisor;
