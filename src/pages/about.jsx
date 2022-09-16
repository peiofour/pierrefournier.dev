import React from 'react';
import Layout from '../components/Layout';
import Seo from "../components/Seo"

import ReactLogo from "./logo_skills/reactLogo.png"
import VueLogo from "./logo_skills/vueLogo.png"
import NextLogo from "./logo_skills/nextjsLogo.png"
import CypressLogo from "./logo_skills/cypressLogo.png"
import IonicLogo from "./logo_skills/logo-IONIC.png"
import FlutterLogo from "./logo_skills/flutter.png"
import SwiftLogo from "./logo_skills/swiftLogo.png"
import KotlinLogo from "./logo_skills/kotlinLogo.png"
import NodeLogo from "./logo_skills/nodeLogo.png"
import RailsLogo from "./logo_skills/railsLogo.png"
import TypescriptLogo from "./logo_skills/typescriptLogo.png"
import DockerLogo from "./logo_skills/docker.png"
import GitLogo from "./logo_skills/formation-git.png"
import GithubLogo from "./logo_skills/githubLogo.png"
import GitlabLogo from "./logo_skills/gitlabLogo.png"
import AzureLogo from "./logo_skills/azure_pipelines.png"
import PostgresLogo from "./logo_skills/postgresLogo.png"
import MysqlLogo from "./logo_skills/mysqlLogo.png"
import RedisLogo from "./logo_skills/redisLogo.png"
import MongoLogo from "./logo_skills/mongoLogo.png"


const AboutPage = () => {
  return (
    <Layout>
      <Seo 
        title={"À propos"}
        description={"Je m'appelle Pierre Fournier, j'ai 25 ans, je suis développeur fullstack freelance."}
        image={"https://res.cloudinary.com/pierrefournier-dev/image/upload/v1648208768/about/DSCF7848_nobjf9.jpg"}
        slug={"about"}
        type="website"
        keywords={["pierre fournier", "développeur","freelance", "blog", "pierre", "fournier", "tech", "startup", "politique"]}
      />
      <div className="post site-about">
        <h1>hello, friend</h1>
        <img
          src='https://res.cloudinary.com/pierrefournier-dev/image/upload/c_scale,h_1055/v1662735743/about/9CE5CA18-B041-48D8-9487-288B8C74DD74_j0nyiu.png'
          alt='Portrait de Pierre Fournier'
        />
        <p>Je m'appelle Pierre Fournier.</p>
        <p>
          Je suis développeur fullstack en freelance. J'ai 25 ans, j'habite à Toulouse, dans le sud de la France et je suis originaire du Pays Basque.
          Je suis passionné par de nombreux sujets, notamment la tech, les startups, le cinéma, la photographie, la cuisine, l'histoire et l'astronomie.
        </p>
        <p>
          Mon CV est disponible <a href="https://drive.google.com/file/d/119SGrsGAWo9syNnZZoHQt6d_SFdKuX-l/view?usp=sharing">ici</a>.
        </p>
        <h2>Skills</h2>
        <h3>Front-end</h3>
        <ul className='site-about__skills row justify-content-center px-0'>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img 
                src={ReactLogo}
                alt="React logo"
              />
              <p>React</p>
            </div>
          </li>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={VueLogo} alt="Vue.js logo" />
              <p>Vue.js</p>
            </div>
          </li>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={NextLogo} alt="Next.js logo" />
              <p>Next.js</p>
            </div>
          </li>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={CypressLogo} alt="Cypress logo" />
              <p>Cypress</p>
            </div>
          </li>
        </ul>

        <h3>Mobile</h3>
        <ul className='site-about__skills row justify-content-center px-0'>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={ReactLogo} alt="React-Native logo" />
              <p>React-Native</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={IonicLogo} alt="Ionic Logo" />
              <p>Ionic</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={FlutterLogo} alt="Flutter Logo" />
              <p>Flutter</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={SwiftLogo} alt="Swift logo" />
              <p>Swift</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={KotlinLogo} alt="Kotlin logo" />
              <p>Kotlin</p>
            </div>
          </li>
        </ul>

        <h3>Back-end</h3>
        <ul className='site-about__skills row justify-content-center px-0'>
          <li className='col-8 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={NodeLogo} alt="Node logo" />
              <p>Node.js</p>
            </div>
          </li>
          <li className='col-8 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={RailsLogo} alt="Rails logo" />
              <p>Ruby on Rails</p>
            </div>
          </li>
          <li className='col-8 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={TypescriptLogo} alt="TypeScript logo" />
              <p>TypeScript</p>
            </div>
          </li>
        </ul>

        <h3>DevOps</h3>
        <ul className='site-about__skills row justify-content-center px-0'>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={DockerLogo} alt="Docker logo" />
              <p>Docker</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={GitLogo} alt="Git logo" />
              <p>Git</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={GithubLogo} alt="Github logo" />
              <p>Github Actions</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={GitlabLogo} alt="Gitlab logo" />
              <p>Gitlab CI/CD</p>
            </div>
          </li>
          <li className='col-5 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={AzureLogo} alt="Azure Pipelines logo" />
              <p>Azure Pipelines</p>
            </div>
          </li>
        </ul>

        <h3>Databases</h3>
        <ul className='site-about__skills row justify-content-center px-0'>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={PostgresLogo} alt="PostgresSQL logo" />
              <p>PostgreSQL</p>
            </div>
          </li>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={MysqlLogo} alt="MySQL logo" />
              <p>MySQL</p>
            </div>
          </li>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={RedisLogo} alt="Redis logo" />
              <p>Redis</p>
            </div>
          </li>
          <li className='col-6 col-md d-flex'>
            <div className='my-3 mx-auto'>
              <img src={MongoLogo} alt="MongoDB logo" />
              <p>MongoDB</p>
            </div>
          </li>
        </ul>

      </div>
    </Layout>
  )
}

export default AboutPage;