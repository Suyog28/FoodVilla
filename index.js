import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <img src="https://icon-library.com/images/restaurant-icon-png/restaurant-icon-png-21.jpg" className="logo" />
    )
}

const HeaderComponants = () => {
    return (
        <div className="navbar">
            <Title />
            <ul className="logo-items">
                <li>Help</li>
                <li>Sign In</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

const restaurantList = [
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "4893726",
            name: "HAJI BIRYANI",
            uuid: "a8528320-6d11-4b1b-803c-fceb10b40987",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "jv0kr8ebxhi8inzxnl0e",
            cuisines: ["Biryani"],
            tags: [],
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            deliveryTime: 40,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "40 MINS",
            lastMileTravel: 9.300000190734863,
            slugs: {
                restaurant: "haji-biryani-chinar-park-chinar-park",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "MONDAL GANTHI,V.I.P.ROAD, WARD NO-22, DUM DUM MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700052",
            locality: "Ward No-22",
            parentId: 21818,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "489326",
                deliveryTime: 40,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 9.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 20,
            new: false,
        },
        subtype: "basic",
        scrubber: {
            value: "RATING 3.4",
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "6619823",
            name: "Only Biryani",
            uuid: "b6b8bf7a-704b-423a-a789-21d625724892",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "375f8d233613b205ab37f42d110edc88",
            cuisines: ["Biryani", "Salads"],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 53,
            minDeliveryTime: 49,
            maxDeliveryTime: 49,
            slaString: "53 MINS",
            lastMileTravel: 9.699999809265137,
            slugs: {
                restaurant: "only-biryani-chinar-park-chinar-park-2",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "KOLKATA AIRPORT QUARTERS, 80, Mall Rd, Indian Airlines Housing Colony, Dum Dum, Kolkata, West Bengal 700080, India",
            locality: "Indian Airlines Housing Colony",
            parentId: 152375,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "NEW",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "669823",
                deliveryTime: 53,
                minDeliveryTime: 49,
                maxDeliveryTime: 49,
                lastMileTravel: 9.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: true,
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "4893626",
            name: "HAJI BIRYANI",
            uuid: "a8528320-6d11-4b1b-803c-fceb10b40987",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "jv0kr8ebxhi8inzxnl0e",
            cuisines: ["Biryani"],
            tags: [],
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            deliveryTime: 40,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "40 MINS",
            lastMileTravel: 9.300000190734863,
            slugs: {
                restaurant: "haji-biryani-chinar-park-chinar-park",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "MONDAL GANTHI,V.I.P.ROAD, WARD NO-22, DUM DUM MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700052",
            locality: "Ward No-22",
            parentId: 21818,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "489326",
                deliveryTime: 40,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 9.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 20,
            new: false,
        },
        subtype: "basic",
        scrubber: {
            value: "RATING 3.4",
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "6696823",
            name: "Only Biryani",
            uuid: "b6b8bf7a-704b-423a-a789-21d625724892",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "375f8d233613b205ab37f42d110edc88",
            cuisines: ["Biryani", "Salads"],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 53,
            minDeliveryTime: 49,
            maxDeliveryTime: 49,
            slaString: "53 MINS",
            lastMileTravel: 9.699999809265137,
            slugs: {
                restaurant: "only-biryani-chinar-park-chinar-park-2",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "KOLKATA AIRPORT QUARTERS, 80, Mall Rd, Indian Airlines Housing Colony, Dum Dum, Kolkata, West Bengal 700080, India",
            locality: "Indian Airlines Housing Colony",
            parentId: 152375,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "NEW",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "669823",
                deliveryTime: 53,
                minDeliveryTime: 49,
                maxDeliveryTime: 49,
                lastMileTravel: 9.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: true,
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "48932065",
            name: "HAJI BIRYANI",
            uuid: "a8528320-6d11-4b1b-803c-fceb10b40987",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "jv0kr8ebxhi8inzxnl0e",
            cuisines: ["Biryani"],
            tags: [],
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            deliveryTime: 40,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "40 MINS",
            lastMileTravel: 9.300000190734863,
            slugs: {
                restaurant: "haji-biryani-chinar-park-chinar-park",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "MONDAL GANTHI,V.I.P.ROAD, WARD NO-22, DUM DUM MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700052",
            locality: "Ward No-22",
            parentId: 21818,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "489326",
                deliveryTime: 40,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 9.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 20,
            new: false,
        },
        subtype: "basic",
        scrubber: {
            value: "RATING 3.4",
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "669823",
            name: "Only Biryani",
            uuid: "b6b8bf7a-704b-423a-a789-21d625724892",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "375f8d233613b205ab37f42d110edc88",
            cuisines: ["Biryani", "Salads"],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 53,
            minDeliveryTime: 49,
            maxDeliveryTime: 49,
            slaString: "53 MINS",
            lastMileTravel: 9.699999809265137,
            slugs: {
                restaurant: "only-biryani-chinar-park-chinar-park-2",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "KOLKATA AIRPORT QUARTERS, 80, Mall Rd, Indian Airlines Housing Colony, Dum Dum, Kolkata, West Bengal 700080, India",
            locality: "Indian Airlines Housing Colony",
            parentId: 152375,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "NEW",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "669823",
                deliveryTime: 53,
                minDeliveryTime: 49,
                maxDeliveryTime: 49,
                lastMileTravel: 9.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: true,
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "489326",
            name: "HAJI BIRYANI",
            uuid: "a8528320-6d11-4b1b-803c-fceb10b40987",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "jv0kr8ebxhi8inzxnl0e",
            cuisines: ["Biryani"],
            tags: [],
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            deliveryTime: 40,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "40 MINS",
            lastMileTravel: 9.300000190734863,
            slugs: {
                restaurant: "haji-biryani-chinar-park-chinar-park",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "MONDAL GANTHI,V.I.P.ROAD, WARD NO-22, DUM DUM MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700052",
            locality: "Ward No-22",
            parentId: 21818,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "489326",
                deliveryTime: 40,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 9.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 20,
            new: false,
        },
        subtype: "basic",
        scrubber: {
            value: "RATING 3.4",
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "6698243",
            name: "Only Biryani",
            uuid: "b6b8bf7a-704b-423a-a789-21d625724892",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "375f8d233613b205ab37f42d110edc88",
            cuisines: ["Biryani", "Salads"],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 53,
            minDeliveryTime: 49,
            maxDeliveryTime: 49,
            slaString: "53 MINS",
            lastMileTravel: 9.699999809265137,
            slugs: {
                restaurant: "only-biryani-chinar-park-chinar-park-2",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "KOLKATA AIRPORT QUARTERS, 80, Mall Rd, Indian Airlines Housing Colony, Dum Dum, Kolkata, West Bengal 700080, India",
            locality: "Indian Airlines Housing Colony",
            parentId: 152375,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "NEW",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "669823",
                deliveryTime: 53,
                minDeliveryTime: 49,
                maxDeliveryTime: 49,
                lastMileTravel: 9.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: true,
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "4893265",
            name: "HAJI BIRYANI",
            uuid: "a8528320-6d11-4b1b-803c-fceb10b40987",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "jv0kr8ebxhi8inzxnl0e",
            cuisines: ["Biryani"],
            tags: [],
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            deliveryTime: 40,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "40 MINS",
            lastMileTravel: 9.300000190734863,
            slugs: {
                restaurant: "haji-biryani-chinar-park-chinar-park",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "MONDAL GANTHI,V.I.P.ROAD, WARD NO-22, DUM DUM MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700052",
            locality: "Ward No-22",
            parentId: 21818,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "489326",
                deliveryTime: 40,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 9.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 20,
            new: false,
        },
        subtype: "basic",
        scrubber: {
            value: "RATING 3.4",
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "6698238",
            name: "Only Biryani",
            uuid: "b6b8bf7a-704b-423a-a789-21d625724892",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "375f8d233613b205ab37f42d110edc88",
            cuisines: ["Biryani", "Salads"],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 53,
            minDeliveryTime: 49,
            maxDeliveryTime: 49,
            slaString: "53 MINS",
            lastMileTravel: 9.699999809265137,
            slugs: {
                restaurant: "only-biryani-chinar-park-chinar-park-2",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "KOLKATA AIRPORT QUARTERS, 80, Mall Rd, Indian Airlines Housing Colony, Dum Dum, Kolkata, West Bengal 700080, India",
            locality: "Indian Airlines Housing Colony",
            parentId: 152375,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "NEW",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "669823",
                deliveryTime: 53,
                minDeliveryTime: 49,
                maxDeliveryTime: 49,
                lastMileTravel: 9.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: true,
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "4893269",
            name: "HAJI BIRYANI",
            uuid: "a8528320-6d11-4b1b-803c-fceb10b40987",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "20+ ratings",
            cloudinaryImageId: "jv0kr8ebxhi8inzxnl0e",
            cuisines: ["Biryani"],
            tags: [],
            costForTwo: 60000,
            costForTwoString: "₹600 FOR TWO",
            deliveryTime: 40,
            minDeliveryTime: 36,
            maxDeliveryTime: 36,
            slaString: "40 MINS",
            lastMileTravel: 9.300000190734863,
            slugs: {
                restaurant: "haji-biryani-chinar-park-chinar-park",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "MONDAL GANTHI,V.I.P.ROAD, WARD NO-22, DUM DUM MUNICIPALITY, North Twenty Four Parganas, West Bengal - 700052",
            locality: "Ward No-22",
            parentId: 21818,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.3 kms",
            hasSurge: false,
            sla: {
                restaurantId: "489326",
                deliveryTime: 40,
                minDeliveryTime: 36,
                maxDeliveryTime: 36,
                lastMileTravel: 9.300000190734863,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "3.4",
            totalRatings: 20,
            new: false,
        },
        subtype: "basic",
        scrubber: {
            value: "RATING 3.4",
        },
    },
    {
        type: "restaurant",
        data: {
            type: "F",
            id: "6698233",
            name: "Only Biryani",
            uuid: "b6b8bf7a-704b-423a-a789-21d625724892",
            city: "7",
            area: "Chinar Park",
            totalRatingsString: "Too Few Ratings",
            cloudinaryImageId: "375f8d233613b205ab37f42d110edc88",
            cuisines: ["Biryani", "Salads"],
            tags: [],
            costForTwo: 10000,
            costForTwoString: "₹100 FOR TWO",
            deliveryTime: 53,
            minDeliveryTime: 49,
            maxDeliveryTime: 49,
            slaString: "53 MINS",
            lastMileTravel: 9.699999809265137,
            slugs: {
                restaurant: "only-biryani-chinar-park-chinar-park-2",
                city: "kolkata",
            },
            cityState: "7",
            address:
                "KOLKATA AIRPORT QUARTERS, 80, Mall Rd, Indian Airlines Housing Colony, Dum Dum, Kolkata, West Bengal 700080, India",
            locality: "Indian Airlines Housing Colony",
            parentId: 152375,
            unserviceable: false,
            veg: false,
            select: false,
            favorite: false,
            tradeCampaignHeaders: [],
            aggregatedDiscountInfo: {
                header: "50% off",
                shortDescriptionList: [
                    {
                        meta: "50% off | Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            aggregatedDiscountInfoV2: {
                header: "50% OFF",
                shortDescriptionList: [
                    {
                        meta: "Use WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                descriptionList: [
                    {
                        meta: "50% off up to ₹80 | Use code WELCOME50",
                        discountType: "Percentage",
                        operationType: "RESTAURANT",
                    },
                ],
                subHeader: "",
                headerType: 0,
                superFreedel: "",
            },
            ribbon: [
                {
                    type: "NEW",
                },
            ],
            chain: [],
            feeDetails: {
                fees: [],
                totalFees: 0,
                message: "",
                title: "",
                amount: "",
                icon: "",
            },
            availability: {
                opened: true,
                nextOpenMessage: "",
                nextCloseMessage: "",
            },
            longDistanceEnabled: 1,
            rainMode: "NONE",
            thirdPartyAddress: false,
            thirdPartyVendor: "",
            adTrackingID: "",
            badges: {
                imageBased: [],
                textBased: [],
                textExtendedBadges: [],
            },
            lastMileTravelString: "9.6 kms",
            hasSurge: false,
            sla: {
                restaurantId: "669823",
                deliveryTime: 53,
                minDeliveryTime: 49,
                maxDeliveryTime: 49,
                lastMileTravel: 9.699999809265137,
                lastMileDistance: 0,
                serviceability: "SERVICEABLE",
                rainMode: "NONE",
                longDistance: "IT_IS_LONG_DISTANCE",
                preferentialService: false,
                iconType: "EMPTY",
            },
            promoted: false,
            avgRating: "--",
            totalRatings: 0,
            new: true,
        },
    },
];

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
    // console.log(props.restaurant);
    return (
        <div className="card">
            <div className="card-items">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
                    + cloudinaryImageId} />
                <h2>{name}</h2>
                <br />
                <h3>{cuisines.join(", ")}</h3>
                <br />
                <h4>{avgRating} Stars</h4>
            </div>

        </div>
    );
}


const Body = () => {
    return (
        <div className="card-list">
            {
                restaurantList.map((restaurant) => {
                    return < RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })
            }
        </div>
    )
}

const Footer = () => {
    return (
        <h1>Footer</h1>
    )
}

const AppLayout = () => {
    return (
        <>
            <HeaderComponants />
            <Body />

        </>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);