export function Invest({ id, title, completed }) {
    function handleChange() {

    }
    return (
        <div>
            <div>
                <input type="checkbox" checked={completed} onChange={handleChange} />
                {id} - {title}
            </div>
        </div>
    );
}
