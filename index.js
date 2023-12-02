import "swiper/swiper.css"
import Swiper, {Pagination} from "swiper";

window.addEventListener('DOMContentLoaded', () => {
    const slidesCardsSection_1 = document.querySelectorAll('.card-section-1 .slider-section_1-card')
    slidesCardsSection_1.forEach(slide => {
        const sliderCardSection_1 = new Swiper(slide, {
            modules: [Pagination],
            centeredSlides: true,

            pagination: {
                el: '.pagination-section_1-card',
            }
        })
    })

    const promoSliderSection_1 = document.querySelectorAll('.promo-slider')
    promoSliderSection_1.forEach(slide => {
        const promoSlideSection_1 = new Swiper(slide, {

            slidesPerView: 1,
            spaceBetween: 24,
            breakpoints: {

                640: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },

                1280: {
                    slidesPerView: 4
                },

            }


        })
    })

    tabs(tabsBlock_1);
    tabs(tabsBlock_2);
})

const tabsBlock_1 = document.querySelector('.tabs-block-1')
const tabsBlock_2 = document.querySelector('.tabs-block-2')
function tabs(tabBlock) {

    const buttons = tabBlock.querySelectorAll('button')
    const contents = tabBlock.querySelectorAll('.content-tab')

    buttons?.forEach((button, index) => {
        button.addEventListener('click', () => {
           const attrContent = button.getAttribute('data-tab')

            buttons?.forEach(button => {
                 button.style.color='inherit'
            })
            contents?.forEach(content => {
                if (content.getAttribute('data-tab-content') === attrContent) {
                    content.classList.remove('hidden')
                    content.classList.add('flex')
                    button.style.color='#30323A'
                } else {
                    content.classList.add('hidden')
                    content.classList.remove('flex')
                }
            })

        })

        if (index === 0) {
            button.click()
        }

    })
}