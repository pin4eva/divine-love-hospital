import AboutComp from 'components/AboutComp'
import BannerComp from 'components/Banner'
import ContactComp from 'components/ContactComp'
import CoronaCaseComp from 'components/CoronaCase'
import CoronaPreventionComp from 'components/CoronaPreventionComp'
import CoronaSymptomsComp from 'components/CoronaSymptomsComp'
import DoctorsComp from 'components/Doctors'
import LatestUpdateComp from 'components/LatestUpdateComp'
import LoaderComp from 'components/Loader'
import React, { useEffect, useState } from 'react'
import HeaderComp from '../components/HeaderComp'

const HomePage: React.FC = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!process.browser) {
            setLoading(true)
        } else {
            setLoading(false)
        }
    }, [])

    if (loading) return <LoaderComp loading={loading} />
    return (
        <div data-spy="scroll" data-target="#nav-part" data-offset="90">
            {/* Header */}
            <HeaderComp />

            {/* Banner */}
            <BannerComp />

            {/* About */}
            <AboutComp />

            {/*  Corona Virus Case Part HTML Start */}

            <CoronaCaseComp />

            {/*  CoronaVirus Symptoms Part HTML Start */}
            <CoronaSymptomsComp />

            {/* Corona Virus Prevention Part HTML Start */}
            <CoronaPreventionComp />

            {/*  Connect Doctors Part HTML Start  */}
            <DoctorsComp />

            {/* Latest Updates Part HTML Start */}
            <LatestUpdateComp />

            {/*   Contact Part HTML Start */}
            <ContactComp />

        </div>
    )
}

export default HomePage
