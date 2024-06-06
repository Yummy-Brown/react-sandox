import React from 'react'
import '../styles/testimonial.css';
import { useState } from 'react';
const users = [
    {
        id: 1,
        name: "Sonya Blade",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales faucibus eleifend ullamcorper in in neque sapien turpis est. Vulputate justo, orci ut tortor tincidunt morbi justo, aliquet dui. Integer blandit praesent odio leo. Nisl non mauris ipsum semper gravida.",
        job: "Tourist",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      },
      {
        id: 2,
        name: "Cassie Cage",
        comment: `Sed arcu elit, rhoncus nec mollis vel, venenatis nec enim. In iaculis quis odio id finibus. Mauris lobortis viverra neque a sollicitudin. Quisque ac sapien massa. Mauris vel nunc odio. Nulla facilisi.`,
        job: "Athlete",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
      },
      {
        id: 3,
        name: "Kotal Kahn",
        comment: `Nam sem tortor, blandit vel purus non, interdum viverra purus. Suspendisse et metus ac ante aliquet maximus. Pellentesque ac fringilla tortor. Cras pellentesque odio ac nisl ultricies aliquet. Quisque laoreet orci ut ex egestas, dictum auctor enim accumsan. Fusce interdum dictum aliquet. Nam hendrerit ac purus at pharetra. Suspendisse porttitor leo ante, eget bibendum quam lacinia sed.`,
        job: "Trainer",
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      },
      {
        id: 4,
        name: "Noob Saibot",
        job: "Teacher",
        comment: `Donec efficitur porttitor dui vitae posuere. Integer non lacus eget nibh rutrum fermentum. Proin aliquam fermentum leo vel pulvinar. Nam tristique ante ut rutrum porta. In faucibus pulvinar quam, ac malesuada dui vulputate sit amet. Integer venenatis at tellus non vestibulum.`,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      },
      {
        id: 5,
        name: "Jacqui Briggs",
        job: "Blogger",
        comment: `Praesent vel felis ac mauris pulvinar fermentum. Donec sodales consequat magna, sed consectetur leo volutpat et. Donec porta maximus purus non iaculis. Donec dictum justo metus, ac pharetra velit condimentum vitae. In cursus mollis erat vitae pellentesque. Nunc egestas in diam ut pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vitae diam vulputate, fermentum turpis a, dictum lacus. Aenean finibus augue`,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      },
];
const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const {comment, image, name, job} = users[index];
    
    const nextPerson = () => {
        setIndex(checkNumber(index + 1));
    };
    const prevPerson = () => {
        setIndex(checkNumber(index - 1));
    };

    const checkNumber = (num) => {
        if (num > users.length -1) {
            return 0;
        }
        if (num < 0) {
            return users - 1;
        }
        return num;
    };
    
  return (
    <div className='testimonial'>
        <div className='heading'>
        <h3>Clients Testimonial</h3>
        <h2>Adventure Ideas</h2>
        <div className='testimonial-main'>
            <img src={image} alt={name} />
            <p>{comment}</p>
            <div className='btn-container'>
                <button onClick={prevPerson}>Prev</button>
                <button onClick={nextPerson}>Next</button>
            </div>
            <h2>{name}</h2>
             <h3>{job}</h3>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;