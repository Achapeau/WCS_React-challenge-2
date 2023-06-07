import PropTypes from 'prop-types'

const Card = ({picture, name, id, category}) => {
    return (
        <><div className="element">
            <div  className={category} id={id}>
                <img src={`http://localhost:5173/images/${picture}`} alt={name} />
            </div>
        </div>
        </>
    )
}

Card.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    category: PropTypes.string

}

export default Card