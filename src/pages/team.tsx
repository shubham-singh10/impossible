import React, { FC, Fragment } from 'react'
import Box from '@mui/material/Box'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme, styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'
import { data } from '../components/team/team.data'
import { TeamCardItem } from '@/components/team'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface SliderArrowArrow {
    onClick?: () => void
    type: 'next' | 'prev'
    className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
    const { onClick, type, className } = props
    return (
        <IconButton
            sx={{
                backgroundColor: 'background.paper',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
                bottom: '-28px !important',
                left: 'unset !important',
                right: type === 'prev' ? '60px !important' : '0 !important',
                zIndex: 10,
                boxShadow: 1,
            }}
            disableRipple
            color="inherit"
            onClick={onClick}
            className={className}
        >
            {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
        </IconButton>
    )
}

const StyledDots = styled('ul')(({ theme }) => ({
    '&.slick-dots': {
        position: 'absolute',
        left: 0,
        bottom: -20,
        paddingLeft: theme.spacing(1),
        textAlign: 'left',
        '& li': {
            marginRight: theme.spacing(2),
            '&.slick-active>div': {
                backgroundColor: theme.palette.primary.main,
            },
        },
    },
}))

const OurTeam: FC = () => {
    const { breakpoints } = useTheme()
    const matchMobileView = useMediaQuery(breakpoints.down('md'))

    const sliderConfig: Settings = {
        infinite: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: <SliderArrow type="prev" />,
        nextArrow: <SliderArrow type="next" />,
        dots: true,
        appendDots: (dots) => <StyledDots>{dots}</StyledDots>,
        customPaging: () => (
            <Box sx={{ height: 8, width: 30, backgroundColor: 'divider', display: 'inline-block', borderRadius: 4 }} />
        ),
    }

    return (
        <Fragment>
            <Header />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100vh', // Full viewport height
                    overflow: 'hidden', // Ensure the image doesn't overflow the container
                    backgroundImage:
                        'linear-gradient(180deg, rgba(27, 31, 37, 0) 0%, #1b1f25 100%), url(/images/team/group.jpg)',
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                    padding: '0 10%',
                    margin: '0 0 -2px',
                }}
            >


                {/* Overlay Text */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                        color: '#fff',
                        textAlign: 'center',
                        width: '100%',
                        px: 2,
                    }}
                >
                    <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 60 } }}>
                        Our Team
                    </Typography>
                </Box>
            </Box>

            {/* Slider Content Section */}
            <Box
                sx={{
                    pt: {
                        xs: 6,
                        md: 8,
                    },
                    pb: {
                        xs: 8,
                        md: 12,
                    },
                    backgroundColor: '#ecf3f3',
                }}
            >
                <Container maxWidth="lg">
                    <Slider {...sliderConfig}>
                        {data.map((item) => (
                            <TeamCardItem key={String(item.id)} item={item} />
                        ))}
                    </Slider>
                </Container>
            </Box>
            <Footer />
        </Fragment>
    )
}

export default OurTeam
