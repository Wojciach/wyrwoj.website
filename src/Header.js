import  "./header.scss";

function Header() {
//console.log("Header");

  function portfolioScroll() {
    document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
  
  return (
    <>
      <header>
          
          
          
          <section>
          <div id="graph"></div>
              <div className="fake-margin">
                <div id="nameTitle">
                  <div id="cvTitle">Curriculum Vitae</div>
                  <div id="myName">WOJCIECH WYROSLAK</div>
                  <div id="jobTitle">JUNIOR WEB DEVELOPER</div>
                </div>
                <div style={{textAlign: "right"}} id="introduction">
                    <span>I am an ambitious fresh web developer seeking employment opportunities to utilize and enhance my skills</span>
                </div>
                <button onClick={portfolioScroll}>
                  Jump to Portfolio <span className="material-symbols-rounded">trending_flat</span>
                </button>
            </div>
          </section>
          
      </header>
    </>  
  );

}

export default Header;
