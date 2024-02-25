import "./Voucher.css";

export default function Voucher() {
    return (
        <div className="voucher">
            <p>Do you have a voucher?</p>
            {/* if no voucher applied */}
            <div className="no-voucher">
                <input type="text" placeholder="Code..." />
                <button
                    type="apply-voucher"
                    className="base-btn">
                    Add
                </button>
            </div>
        </div>
    )
}