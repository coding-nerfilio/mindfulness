import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import TimelineIcon from '@mui/icons-material/Timeline'
import PersonIcon from '@mui/icons-material/Person'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {Route} from '../../../router'

import styles from './BottomNav.module.css'

const BottomNav = () => {
    const [value, setValue] = useState(1)
    const navigate = useNavigate()

    return (
        <Box className={styles.Container}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                    switch (newValue) {
                        case 0:
                            navigate(Route.HISTORY)
                            break
                        case 1:
                            navigate(Route.HOME)
                            break
                        case 2:
                            navigate(Route.ACCOUNT)
                            break
                    }
                }}
            >
                <BottomNavigationAction
                    label="History"
                    icon={<TimelineIcon />}
                />
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction
                    label="My Account"
                    icon={<PersonIcon />}
                />
            </BottomNavigation>
        </Box>
    )
}

export default BottomNav
