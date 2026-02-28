import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}) {
    const INIT_URL = 
       "https://plus.unsplash.com/premium_photo-1733259691737-6b9a4f78c6c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

       const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
       const COLD_URl = "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
       const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                          info.humidity > 80 
                          ? RAIN_URL 
                          : info.temp > 15 
                          ? HOT_URL 
                          : COLD_URl
                        }
                       title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {info.city} {
                          info.humidity > 80 
                          ?<ThunderstormIcon/> 
                          : info.temp > 15 
                          ? <SunnyIcon/> 
                          : <AcUnitIcon/>
                        }
                        </Typography>
                        <Typography variant="body2" color ='text.secondary' component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min. Temp = {info.tempMin}&deg;C</p>
                            <p>Max. Temp = {info.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <i>{info.weather} </i>
                                and feels like {info.feelsLike}
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}