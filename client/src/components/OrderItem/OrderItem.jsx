import "./OrderItem.css";

const dateFormatter = (inputDate) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateObj = new Date(inputDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', options);
    
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    
    return `${formattedDate}, ${formattedTime}`;
  }

export default function OrderItem({ order, number }) {
    const orderObj = order[0];

    return (
        <div className="order-item">
            <div className="past-order-details">
                <h3>Order Nr. {number+1}</h3>
                <p>Placed On: {dateFormatter(orderObj.created)}</p>
            </div>
            <div className="line-div"></div>
            <div className="past-order-details">
                <p>Total: ${orderObj.totalCost}</p>
                <button type="button" className="base-btn">See Order Details</button>
            </div>
        </div>
    )
}