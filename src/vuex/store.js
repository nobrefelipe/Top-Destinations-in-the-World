import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    state: {

        current_location : 'london',

        loading: false, // fake payload from server

        destinations: {

            london:{

                city: 'london',

                country: 'united kingdom',

                content: '<p>London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. </p><i>"There`s nowhere like London. Nothing at all, anywhere"</i>',

                main_color: "rgb(36,67,108)",

                links:[

                    {
                        label: 'Places to visit',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Holiday rental',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Museums',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Hotels',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Tours',
                        link: 'http://www.google.com'
                    }

                ]

            },

            istanbul:{

                city: 'istanbul',

                country: 'turkey',

                content: '<p>Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. In the Sultanahmet district, the open-air, Roman-era Hippodrome was for centuries the site of chariot races, and Egyptian obelisks also remain. The iconic Byzantine Hagia Sophia features a soaring 6th-century dome and rare Christian mosaics. </p><i>"Istanbul is inspiring because it has its own code of architecture, literature, poetry and music. "</i>',

                main_color: "rgb(72,75,93)",

                links:[

                    {
                        label: 'places to visit',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'restaurants',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'hotels',
                        link: 'http://www.google.com'
                    }

                ]

            },

            paris:{

                city: 'paris',

                country: 'france',

                content: `<p>Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.</p><i>"There's nowhere like London. Nothing at all, anywhere"</i>`,

                main_color: "rgb(50,127,188)",

                links:[

                    {
                        label: 'Museums',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Hotels',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Tours',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Places to visit',
                        link: 'http://www.google.com'
                    },

                    {
                        label: 'Holiday rental',
                        link: 'http://www.google.com'
                    }
                ]

            },

        }
    },


    mutations: {

        UPDATE_CURRENT_LOCATION( state, location){

            state.loading = true;

            state.current_location = location;

            // fake payload from server
            setTimeout( () =>{

                state.loading = false;

            }, 400);

        },

    }

});