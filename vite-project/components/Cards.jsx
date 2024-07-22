export default function Cards(props) {
   return (
    <div className="card-list">
        <img src={props.details.image} />
        <div className="information">
        <h4 className="country"><img src="./map.png" /> {props.details.location} <a href={props.details.googleMapsUrl}>view on Google Maps</a></h4>
        <h1>{props.details.title}</h1>
        <h4>{props.details.startDate} - {props.details.endDate}</h4>
        <p>{props.details.description}</p>
        </div>
    </div>
   )
}