
import "./MiOrg.css";


const MiOrg = (props) => {

    //Estado - hooks
    //useState

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="imagen add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg