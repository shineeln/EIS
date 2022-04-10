const Container = (props) => {
    return <main>
        <section className="row">
            {props.children}
        </section>
    </main>
}
export default Container;