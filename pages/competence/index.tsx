import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import styles from '../../styles/Competence.module.css'
import { Divider, Rating } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Filler,
    Title,
    Tooltip,
    Legend
);

const x: "x" | "y" | undefined = "x"
const y: "x" | "y" | undefined = "y"

export const options_language = {
    responsive: true,
    indexAxis: x,
    elements: {
        bar: {
            borderColor: "#283593",
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: "#283593"
        }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: false
      },
    },
    scales: {
        x: {
            grid: {
              offset: false
            }
        }
    }
};

export const options_language_horizontal = {
    responsive: true,
    indexAxis: y,
    elements: {
        bar: {
            borderColor: "#283593",
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: "#283593"
        }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: false
      },
    },
    scales: {
        x: {
            grid: {
              offset: false
            }
        }
    }
};

const option_radar = {
    scales: {
        r: {
            angleLines: {
                display: false
            },
            suggestedMin: 0,
            suggestedMax: 10,
            max: 10,
            min: 0,
            tiks: {
                stepSize: 1
            },
            grid: {
                tickLength: 500
            }
        }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      title: {
        display: false
      },
    },
}

const labels = ['React js', 'React Native', 'HTML/CSS', 'Redux', 'AWS', 'Node js', 'Next js', 'Nest js'];


export const data = {
    labels,
    datasets: [
      {
        label: 'competence language',
        data: [90, 100, 80, 100, 70, 70, 50, 50],
        backgroundColor: ['rgba(40, 53, 144, 0.5)'],
      }
    ],
};

export const data_horizontal = {
    labels,
    datasets: [
      {
        label: 'competence language',
        data: [90, 100, 80, 100, 70, 70, 50, 50],
        backgroundColor: ['rgba(40, 53, 144, 0.5)'],
        axis: 'y'
      }
    ],
};

const data_radar = {
    labels: [
      'Humour',
      'Autonomie',
      'Curieux',
      'Motivée',
      'Dynamique',
      'Sociable'
    ],
    datasets: [{
    //   label: 'My First Dataset',
      data: [8, 10, 10, 10, 9, 8],
      fill: true,
      backgroundColor: 'rgba(40, 53, 144, 0.2)',
      borderColor: 'rgba(40, 53, 144, 0.8)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};

const chiffre_clefs = {
    age: 32,
    experience: 4,
    baccalaureat: 2012,
    licenceMath: 2016
}

const Conpetence: NextPage = () => {

    const [age, set_age] = useState<number>(0)
    const [experience, set_experience] = useState<number>(0)
    const [baccalaureat, set_baccalaureat] = useState<number>(1990)
    const [licenceMath, set_licenceMath] = useState<number>(1990)
    const [chart_horizontal, set_chart_horizontal] = useState<boolean>(true)
    const [ess, set_ess] = useState<number>(0)

    const ref_set_chart_horizontal = useRef(set_chart_horizontal)
    const ref_chart_horizontal = useRef(chart_horizontal)

    useEffect(() => {
        for (let i = 0; i < 2017; i++) {
            if (32 > i && age < 32) {
                set_age(age+1)
            }
            if (4 > i && experience < 4) {
                set_experience(experience+1)
            }
            if (2012 > i && baccalaureat < 2012) {
                set_baccalaureat(baccalaureat+1)
            }
            if (2017 > i && licenceMath < 2014) {
                set_licenceMath(licenceMath+1)
            }
        }
    }, [age,experience,baccalaureat,licenceMath])
    

    useEffect(() => {
        const listener_resize = (event: any): void => {
            console.log(ref_chart_horizontal.current);
            set_ess(event.target.innerWidth)
            if (chart_horizontal && event.target.innerWidth < 715) {
                console.log("change chart horizontal 1")
                set_chart_horizontal(true)
                ref_chart_horizontal.current = true
            }
            if (chart_horizontal! && event.target.innerWidth > 715) {
                console.log("change chart horizontal 2")
                set_chart_horizontal(false)
                ref_chart_horizontal.current = false
            }
        }
        window.addEventListener('resize', listener_resize)
        return () => window.removeEventListener('resize', listener_resize)
    }, [])

    return (
        <div className={styles.container}>
        <Head>
            <title>Parsekonlepeu - Competences</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

            <div className='container'>
                <div className={styles.grid}>
                    <div className={styles.case1}>
                        <div className={styles.childCase1}>
                            <div className={styles.chartLangage}>
                                {
                                    chart_horizontal! ?
                                    <Bar options={options_language} data={data} height={100} />
                                    :
                                    <Bar options={options_language_horizontal} data={data} height={100} />
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.case2}>
                        <div className={styles.childCase2}>
                            <Radar data={data_radar} options={option_radar}/>
                        </div>
                    </div>
                    <div className={styles.case3}>
                        <div className={styles.childCase3}>
                            <div className={styles.compLangage}>
                                <p>
                                    Javascript {ess} {chart_horizontal.toString()}
                                </p>
                                <Rating defaultValue={4.5} precision={0.5} readOnly />
                            </div>
                            <Divider flexItem={true} variant='middle'/>
                            <div className={styles.compLangage}>
                                <p>
                                    Python
                                </p>
                                <Rating defaultValue={3} precision={0.5} readOnly />
                            </div>
                            <Divider flexItem={true} variant='middle'/>
                            <div className={styles.compLangage}>
                                <p>
                                    Typescript
                                </p>
                                <Rating defaultValue={4} precision={0.5} readOnly />
                            </div>
                            <Divider flexItem={true} variant='middle' />
                            <div className={styles.compLangage}>
                                <p>
                                    PHP
                                </p>
                                <Rating defaultValue={2} precision={0.5} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className={styles.case4}>
                        <div className={styles.childCase4}>
                            <div className={styles.chiffreClefs}>
                                <h1>
                                    age
                                </h1>
                                <p>
                                    {age}
                                </p>
                            </div>
                            <Divider orientation='vertical' />
                            <div className={styles.chiffreClefs}>
                                <h1>
                                    experience
                                </h1>
                                <p>
                                    {experience}
                                </p>
                            </div>
                            <Divider orientation='vertical' />
                            <div className={styles.chiffreClefs}>
                                <h1>
                                    Baccalauréat
                                </h1>
                                <p>
                                    {baccalaureat}
                                </p>
                            </div>
                            <Divider orientation='vertical' />
                            <div className={styles.chiffreClefs}>
                                <h1>
                                    Bac+2 Math
                                </h1>
                                <p>
                                    {licenceMath}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        </div>
    )
}

export default Conpetence