const Module = (props) => {
    return <section className="container mx-auto mt-28">
        <h2 className="text-4xl font-bold text-center">СИСТЕМИЙН ҮНДСЭН МОДИУЛУУД</h2>
        <hr className="center"/>
        {props.children}
    </section>
}
export default Module;