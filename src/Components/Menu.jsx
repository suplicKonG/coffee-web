import cappuccino from '../assets/Cappuccino.png'
import espresso from '../assets/espresso.jpg'
import cheesecake from '../assets/cheesecake.png'
import interior from '../assets/coffee_interior.png'

function Menu(){
    return(
        <>
<div className="interior-wrapper">
    <div className="interior">
        <img src={interior} alt="Interior image"></img>
    </div>
</div>

    <div id="menu" className="menu-wrapper">
        <div className="menu-card">
            <div className="card-body">
                <img src={cappuccino} alt="Cappuccino image"></img>
                <h5>Cappuccino</h5>
                <p>Vychutnejte si naše exlusivní domací Cappuccino.</p>
            </div>
        </div>

        <div className="menu-card">
            <div className="card-body">
                <img src={espresso} alt="Espresso image"></img>
                <h5>Espresso</h5>
                <p>Naše domácí Espresso je ideální parťák pro zahřátí.</p>
            </div>
        </div>

        <div className="menu-card">
            <div className="card-body">
                <img src={cheesecake} alt="Cheesecake image"></img>
                <h5>Cheesecake</h5>
                <p>Z naší nabídky Vám nesmí uniknout ani náš delikátní domácí Cheesecake.</p>
            </div>
        </div>
    </div>
        </>
    )
}

export default Menu