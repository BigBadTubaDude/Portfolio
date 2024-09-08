import './App.css'
import './reset.css'
import TurlePNG from './assets/Turtle.png'
import SaitamaPNG from './assets/Saitama.png'
import AdpPNG from './assets/ADP.png'
import BurgessPNG from './assets/Burgess.png'
import CannonPNG from './assets/Cannon.png'
import CalculatorPNG from './assets/Calculator.png'

function App() {

  return (
    <>
      <div id="intro">
        <h1>Programming Portfolio</h1>
        <p id="nameInfo">Name: Coleman Alexander</p>
        <p id="emailInfo">Email: Bigbadtubadude@gmail.com</p>
        <p id="phoneInfo" className="rightInfo">Phone: 864-633-9727</p>
        <p id="majorInfo" className="rightInfo">Major: Software and Web Development</p>
      </div>
      <div id="Burgess" className="item HTML CSS JavaScript">
        <h2>Gary L. Burgess SC State Superintendent of Education Campaign Site</h2>
        <p>This was developed by Joel Vasquez and myself as the official campaign site for Gary L. Burgess. I also managed the hosting of the site on GoDaddy for the campaign. Burgess came in second in the SC Democratic primaries on June 14, 2022 with 54,464 votes (<a href="https://ballotpedia.org/Gary_Burgess">BallotPedia</a>). The official site is no longer up (the campaign is over) but, the site is still visible on <a href="https://bigbadtubadude.github.io/burgess/">GitHub Pages.</a></p>
        <section>
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
        <img src={BurgessPNG} />
      </div>

      <div className="divideLine">_________________________</div>


      <div id="Cannon" className="item HTML CSS JavaScript(Canvas)">
        <h2>Cannon Run</h2>
        <p>The final project for Intermediate Web Development, this game involves heavy use of the Canvas aspect of JavaScript. The most intricate game I have made to date and coding it was a blast. I plan to update it occasionally to add new features even now that it has been turned in. For now, it only works on desktop but moving it to mobile will be a future project</p>
        <section>
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript(Canvas)</li>
          </ul>
        </section>
        <img src={CannonPNG} />
        <h3 id="cannonLink" className="link"><a href="https://bigbadtubadude.github.io/Cannon-Run/">Play game!</a> or <br />Checkout the <a href="https://github.com/BigBadTubaDude/Cannon-Run"> GitHub</a> repo</h3>
      </div >


      <div className="divideLine">_________________________</div>


      <div id="ADP" className="item Python SQLite">
        <h2>Turn Based Fighting Game</h2>
        <p> <img id="ADPPic" src={AdpPNG} alt="An ASCII confinguration of an axe, a dagger, and a potion" />
          I made this game to practice using SQLite.
          Simply named "Axe, Dagger, Potion" after the items the player can use each turn, this game involves taking turns with a computer enemy inflicting damage on each other or healing oneself.
          Each choice involves different risk/reward from randomly generated numbers based on possible ranges of damage/healing.
          This dynamic of carefully selected ranges was chosen after creating an iterative test python program.
          This python program ran through the game thousands of times, changing the variables each time, and recording the win/loss rates of each set of statistics in an SQLite database.
          This was meant to balance the choices among each other, making sure each choice was not too weak or too powerful compared to another.

        </p>

        <section>
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
            <li>SQLite</li>
          </ul>
        </section>

      </div>
      <h3 className="link"><a href="https://replit.com/@BigBadTubaDude/AXE-DAG-POTGAME#main.py">Play game!</a><br />Or check out the <a href="https://github.com/BigBadTubaDude/ADP_Game">Github</a></h3>
      <div className="divideLine">_________________________</div>
      <div id="Calculator" className="item HTML CSS JavaScript">
        <h2>Calculator</h2>
        <p>A class project for Intermediate Web Development class, the assignment was to create a four-function calculator and add as much functionality as possible. JavaScript is used extensively as it is the focus of the class. Compatibility with all browsers was not a requirement, please use the Chrome browser if the site looks different from picture.</p>
        <section>
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
        <img id="calcPic" src={CalculatorPNG} />
      </div>
      <h3 className="link"><a href="https://bigbadtubadude.github.io/Calculator/">Try it!</a></h3>

      <div className="divideLine">_________________________</div>
      <div id="Saitama" className="item HTML CSS">
        <h2>Saitama for President!</h2>
        <p>The final project for the Beginner Web Development class. The assignment was to make a campaign site for a fictional character. Compatibility across browsers and mobile was not required (desktop version only). </p>
        <section>
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </section>
        <img src={SaitamaPNG} />
      </div>
      <h3 className="link"><a href="https://bigbadtubadude.github.io/">Visit Site!</a></h3>
      <div className="divideLine">_________________________</div>
      <div id="Turtle" className="item Python">
        <h2>Turtle game</h2>
        <p> This simple but clever game is a rendition of hangman. <a>Bet you can't win!</a>.</p>
        <section>
          <h3>Languages</h3>
          <ul>
            <li>Python</li>
          </ul>
        </section>
        <img id="turtlePic" src={TurlePNG} />
      </div>
      <h3 className="link"><a href="https://replit.com/@BigBadTubaDude/Dont-Be-A-Turtle#main.py">Play game!</a></h3>
    </>
  )
}

export default App
