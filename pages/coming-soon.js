import React from 'react';

const Contact = () => {
    const [days, setDays] = React.useState('');
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('');
    const [seconds, setSeconds] = React.useState('');

    React.useEffect(() => {
        const interval = setInterval(() => { 
            commingSoonTime();
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const commingSoonTime = () => {
        let endTime = new Date("August 23, 2022 17:00:00 PDT");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }
    return (
        <>
            <div className="coming-area">
                <div className="coming-item">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="coming-text">
                                    <h1>Under Construction...</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea deserunt beatae voluptas, animi harum dolorum totam, praesentium, dolor sint aspernatur perspiciatis iusto labore nulla rerum earum! Sit commodi quia provident!</p>

                                    <div className="row coming-wrap" id="timer">
                                        <div className="col-6 col-sm-6 col-lg-3">
                                            <div className="coming-inner">
                                                <div id="days">
                                                    {days} <span>Days</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-6 col-lg-3">
                                            <div className="coming-inner">
                                                <div id="hours">
                                                    {hours} <span>Hours</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-6 col-lg-3">
                                            <div className="coming-inner">
                                                <div id="minutes">
                                                    {minutes} <span>Minutes</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-6 col-lg-3">
                                            <div className="coming-inner">
                                                <div id="seconds">
                                                    {seconds} <span>Seconds</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="icofont-pinterest"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;