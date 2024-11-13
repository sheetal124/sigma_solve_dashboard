import { cardDetails1, cardDetails2, cardDetails3, cardDetails4 } from '../utilities/card.const'
import SingleCard from './SingleCard'

function Cards() {
    return (
        <div className='grid gap-4 grid-cols-4 px-8 mt-8'>
            <SingleCard
                logo={cardDetails1.logo}
                graph={cardDetails1.graph}
                title={cardDetails1.title}
                count={cardDetails1.count}
                percentageChange={cardDetails1.percentageChange}
            />
            <SingleCard
                logo={cardDetails2.logo}
                graph={cardDetails2.graph}
                title={cardDetails2.title}
                count={cardDetails2.count}
                percentageChange={cardDetails2.percentageChange}
            />
            <SingleCard
                logo={cardDetails3.logo}
                graph={cardDetails3.graph}
                title={cardDetails3.title}
                count={cardDetails3.count}
                percentageChange={cardDetails3.percentageChange}
            />
            <SingleCard
                logo={cardDetails4.logo}
                graph={cardDetails4.graph}
                title={cardDetails4.title}
                count={cardDetails4.count}
                percentageChange={cardDetails4.percentageChange}
            />
        </div>
    )
}

export default Cards