// import { getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react"
import { getImage, GatsbyImage as Img } from 'gatsby-plugin-image';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Review } from "../types";


export const CustomerReviewList: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
    const [reviewData, setReviewData] = useState(reviews);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [touched, setTouched] = useState(false);
    const breakpoint = useBreakpoint();
    const doneAnimating = () => {
        let newReviewData = [...reviewData.slice(1), reviewData[0]];
        setReviewData(newReviewData)
        const newIndex = (lastUpdate + 1) % reviewData.length;
        setLastUpdate(null)
        startAnimating(newIndex)

    }

    const startAnimating = (index) => {


        setTimeout(() => {
            setLastUpdate(index);
        }, 4000)


    }
    useEffect(() => {
        // console.log({ topIndex })
        if (breakpoint.lg && !touched) {
            startAnimating(0);
            setTouched(true);
        }
    }, [breakpoint, touched])



    return <div className={`space-y-2`}>
        {reviewData.map((review) => <CustomerReviewComponent animateCard={!breakpoint.lg} key={'customerReview' + review.frontmatter.index} lastUpdate={lastUpdate} doneAnimating={doneAnimating} review={review} />)}
    </div>
}

const CustomerReviewComponent: React.FC<{ review: Review, animateCard: boolean, lastUpdate: number | null, doneAnimating: () => void }> = ({ animateCard, lastUpdate, doneAnimating, review }) => {
    const customerImage = getImage(review.frontmatter.featuredImage as any);
    const index = review.frontmatter.index;
    const [additionalClass, setAdditionalClass] = useState("");
    // const [translateClass, setTranslateClass] = useState("");
    useEffect(() => {
        if (animateCard) {
            return;
        }
        if (lastUpdate == null) {
            setAdditionalClass("")
            return;
        }
        let timeout;
        if (index == lastUpdate) {

            setAdditionalClass('md:translate-x-out')

            timeout = setTimeout(() => {
                doneAnimating()
            }, 700)
            // updateReview(index);
        }
        return () => clearTimeout(timeout);

    }, [lastUpdate, index, animateCard])

    return <div className={`transition-transform duration-700 transform motion-reduce:transition-none motion-reduce:transform-none md:flex dark:bg-gray-800 bg-gray-100 rounded-xl p-8 md:p-0  ${additionalClass}`}>
        <div className='w-32 h-32 md:w-2/6 md:h-auto md:rounded-l-xl md:rounded-none rounded-full mx-auto'>
            <Img className="rounded-full md:rounded-l-xl md:rounded-none h-full" alt="test" image={customerImage} />
        </div>
        <div className="pt-6 md:py-6 md:px-5 md:w-4/6 flex flex-col text-center md:text-left space-y-4">
            <blockquote>
                <p className="text-lg dark:text-gray-100 font-semibold">
                    “{review.frontmatter.title}”
                </p>
            </blockquote>
            <figcaption className="font-medium">
                <div className="text-cyan-600 dark:text-gray-100">
                    {review.frontmatter.customer}
                </div>
                <div className="text-gray-500">
                    {review.frontmatter.date}
                </div>
            </figcaption>
        </div>
    </div>




}
export default CustomerReviewComponent;