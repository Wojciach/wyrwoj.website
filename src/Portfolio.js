import "./portfolio.scss";
import linkDesc from "./linksAndDescriptions.js";

function Portfolio() {


    function Links() {
        
        return (

            linkDesc.map((item) => { return <div key={item.link}> {item.link} </div> })

        )
    }

    return (
        <>
            <section className="fake-margin" id="portfolio">
                <h2>PORTFOLIO</h2>
                <div id="portfolio-content">
                    <div id="links">
                        <Links />
                    </div>
                    <div id="lDesriptions">

                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;