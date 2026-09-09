function Toogle({ active, onChange }) {
    return (
        <label className={active ? "toggle toggle--active" : "toggle"}>
            <input
                type="checkbox"
                checked={active}
                onChange={onChange}
                className="toggle__input"
                aria-label="Changer le mode de prix"
            />
            <span className="toggle__track" aria-hidden="true">
                <span className="toggle__thumb" />
            </span>
        </label>
    );
}

export default Toogle;