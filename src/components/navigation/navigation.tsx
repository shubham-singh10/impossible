import React, { FC, useState } from 'react';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import { navigations } from './navigation.data';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navigation: FC = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (destination: string): void => {
    if (destination.startsWith('/')) {
      router.push(destination);
    } else {
      // Internal section link handling
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          key={destination}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === router.pathname && {
              color: 'primary.main',
            }),
            '& > div': { display: 'none' },
            '&.current > div': { display: 'block' },
            '&:hover': {
              color: 'primary.main',
              '& > div': {
                display: 'block',
              },
            },
          }}
          onMouseEnter={() => destination === 'popular' && setDropdownOpen(true)}
          onMouseLeave={() => destination === 'popular' && setDropdownOpen(false)}
          component={destination.startsWith('/') ? 'div' : ScrollLink}
          onClick={() => {
            if (destination.startsWith('/')) {
              handleNavigation(destination);
            }
          }}
          activeClass="current"
          to={!destination.startsWith('/') ? destination : undefined}
          spy={true}
          smooth={true}
          duration={350}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 12,
              transform: 'rotate(3deg)',
              '& img': { width: 44, height: 'auto' },
            }}
          >
            <Image src="/images/headline-curve.svg" alt="Headline curve" height={10} width={50} />
          </Box>
          {label}
          {destination === 'popular' && (
            <Box
              className="dropdown-menu"
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: '#fff',
                color: '#000',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                borderRadius: 1,
                overflow: 'hidden',
                zIndex: 10,
                opacity: dropdownOpen ? 1 : 0,
                transform: dropdownOpen ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                display: dropdownOpen ? 'block' : 'none',
                width: '200px',
              }}
            >
              <Box sx={{ p: 2 }}>
                <Box
                  sx={{
                    py: 1,
                    color: "GrayText"
                  }}
                >
                  Individual
                </Box>
                <Box
                  sx={{
                    py: 1,
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#f0f0f0', padding: "10px" },
                  }}
                >
                  Counselling & Healing
                </Box>
                <Box
                  sx={{
                    py: 1,
                    color: "GrayText"
                  }}
                >
                  Corporate
                </Box>

                <Box
                  sx={{
                    py: 1,
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#f0f0f0', padding: "10px" },
                  }}
                >
                  Corporate Training & EAP
                </Box>
                <Box
                  sx={{
                    py: 1,
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#f0f0f0', padding: "10px" },
                  }}
                  onClick={() => handleNavigation("/business-coaching")}
                >
                  Coaching
                </Box>
                <Box
                  sx={{
                    py: 1,
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#f0f0f0', padding: "10px" },
                  }}
                  onClick={() => handleNavigation("/business-management-consulting")}
                >
                  Consulting
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
