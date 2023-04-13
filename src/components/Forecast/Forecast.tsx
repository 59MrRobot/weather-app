import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';
import { useSelector } from 'react-redux';
import './Forecast.scss';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const Forecast: React.FC = React.memo(
  () => {
    const forecast: Forecast = useSelector((state: any) => state.forecast);
    const currentDay = new Date().getDay();

    const forecastDays = WEEK_DAYS.slice(currentDay, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, currentDay));

    return (
      <>
        <label className="title" style={{ marginLeft: "5px"}}>Daily</label>

        <Accordion allowZeroExpanded>
          {[...forecast.list].splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label className="day">{forecastDays[index]}</label>

                    <label className="description">
                      {item.weather[0].main}
                    </label>

                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Feels Like:</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label>Pressure:</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label>Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label>Wind Speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>

                  <div className="daily-details-grid-item">
                    <label>Sea Level:</label>
                    <label>{item.main.sea_level} hPa</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    )
  }
)