import React from 'react';
import './App.css';
import { Navbar, Dropdown, Avatar, Tabs, Card } from 'flowbite-react';
import Footer1 from './compenets/Footer1'
import image from './images/img.jpg'

function App() {
  return (
    <>
      <div className="drop-shadow-md">
        <Navbar
          fluid={true}
          rounded={true}
        >
          <Navbar.Brand href>
            <img

            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">

            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="User settings" rounded={true} />}
            >
              <Dropdown.Header>
                <span className="block text-sm drop-shadow-md">
                  Laila Raddaoui
                </span>
                <span className="block truncate text-sm font-medium drop-shadow-md">
                  raddaouilaila@gmail.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item className='drop-shadow-md'>
                Profile
              </Dropdown.Item>
              <Dropdown.Item className='drop-shadow-md'>
                Home
              </Dropdown.Item>
              <Dropdown.Item className='drop-shadow-md'>
                Projects
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>

              </Dropdown.Item>
              <Dropdown.Item className='drop-shadow-md'>
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link className='drop-shadow-md'
              href="/navbars"
              active={true}
            >
              Home
            </Navbar.Link>
            <Navbar.Link className='drop-shadow-md' href="/navbars" >
              About
            </Navbar.Link>
            <Navbar.Link className='drop-shadow-md' href="/navbars ">
              Services
            </Navbar.Link>

            <Navbar.Link className='drop-shadow-md' href="/navbars">
              Contacts
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="max-w-sm m-auto p-10 ">
        <Card className='border-teal-300 border-8'>
          <div className="flex flex-col items-center pb-10 bg-white">
            <img
              className="mb-3 h-15 w-20 rounded-full shadow-lg drop-shadow-md"
              src={image}
              alt="Leila"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white drop-shadow-md ">
              Laila Raddaoui
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Programmer
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-teal-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-teal-300 drop-shadow-md"
              >
                Contact me
              </a>

            </div>
          </div>
        </Card>
      </div>

      <div className='p-6'>
        <Tabs.Group
          aria-label="Tabs with underline"
          style="underline"
        >
          <Tabs.Item className="text-teal-400" title="Education">
            <h2>Student in the Moroccan school of engineering sciences</h2>
          </Tabs.Item>
          <Tabs.Item
            active={true}
            className='drop-shadow-md' title="Experience "
          >
            <h2>Réalisation d'une application Java qui permet de résoudre le probleme des flux sur réseaux</h2>
            <h2>Application mobile (Pokemon)</h2>
            <h2>Application Java de Gestion Hôtellerie</h2>
          </Tabs.Item>
          <Tabs.Item className='drop-shadow-md' title="Skills">
            <h2>Spring</h2>
            <h2>JEE</h2>
            <h2>Python</h2>
          </Tabs.Item>
          <Tabs.Item className='drop-shadow-md' title="Certificats">
            <h2> Development with React </h2>
            <h2> Bootstrap </h2>
            <h2>Cloud Computing</h2>
            <h2>Node js</h2>
            <h2>Devops</h2>

          </Tabs.Item>
          <Tabs.Item
            active={true}
            title="About me">
            Future computer and network engineer

          </Tabs.Item>
        </Tabs.Group>
      </div>

      <Footer1 />
    </>
  );
}

export default App;
