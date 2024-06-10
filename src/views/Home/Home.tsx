import {Box, Typography} from '@mui/material'
import mockData from '../../mock/mock-data.json'
import Scrollbar from 'react-scrollbars-custom'

const Home = () => {
    return (
        <Box className="PageContainer">
            <Scrollbar>
                {mockData.map((item) => (
                    <Box key={item.title} className="ArrayContainer">
                        <Typography variant="subtitle1" fontWeight="bold">
                            {item.title}
                        </Typography>
                        <Typography variant="body2">
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Scrollbar>
        </Box>
    )
}

export default Home
