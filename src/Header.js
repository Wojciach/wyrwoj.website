import  "./header.scss";

function Header() {
  
  return (
    <>
      <header>
        
          <div className="fake-margin" id="cv"> Digital CV<span> made by:</span></div>

          <section>
            <div className="fake-margin">
                <div id="nameTitle">
                  <div id="name">WOJCIECH WYROSLAK</div>
                  <div id="title">JUNIOR WEB DEVELOPER</div>
                </div>
                <div style={{textAlign: "right"}} id="introduction">
                    I am an ambitious fresh web developer seeking employment opportunities to utilize and enhance my skills
                </div>
                <button>
                  Jump to Portfolio <span className="material-symbols-rounded">trending_flat</span>
                </button>
            </div>
          </section>
        
      </header>
    </>  
  );

}

export default Header;
