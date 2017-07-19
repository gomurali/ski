import {PropTypes} from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import '../../stylesheets/SkiDayCount.scss'
import {PieChart, Pie, Sector, Cell} from 'recharts';

const SkiDayCount = ({total = 0, powder = 0, backcountry = 0}) => {
    const data = [{name: 'Total', value: total}, {name: 'powder', value: powder},
        {name: 'backcountry', value: backcountry}];
    const COLORS = ['#0088FE', '#00C49F', '#FF8042'];

    return (
        <div className="ski-day-count row">
            <div className="col-md-6">
                <div className="total-days">
                    <span>{total}</span>
                    <Calendar />
                    <span>days</span>
                </div>
                <div className="powder-days">
                    <span>{powder}</span>
                    <SnowFlake />
                    <span>powder</span>
                </div>
                <div className="backcountry-days">
                    <span>{backcountry}</span>
                    <Terrain />
                    <span>hiking</span>
                </div>
            </div>
            <div className="col-md-6">
                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        cx={300}
                        cy={200}
                        labelLine={false}
                        outerRadius={80}
                        label={renderCustomizedLabel}
                        fill="#8884d8"
                    >
                        { data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]}/>) }
                    </Pie>
                </PieChart>
            </div>
        </div>

    );
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}{index}
        </text>
    );
}

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number
}

export default SkiDayCount;