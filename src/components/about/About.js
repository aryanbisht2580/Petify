import React from 'react'
import AboutItems from './AboutItems'

function About() {
  return (
    <div>
    <AboutItems image={"./screenshots/home.png"} right={true} text={"Petify simplifies pet adoption by connecting owners and adopters effortlessly."}/>
    <AboutItems image={"./screenshots/login.png"} image2={"./screenshots/signup.png"} right={false} text={"Petify offers easy login and signup for secure user authentication."}/>
    <AboutItems image={"./screenshots/home.png"} image2={"./screenshots/petDetails.png"} right={true} text={"Browse through the profiles to see details and find the perfect match for your home."}/>
    <AboutItems image={"./screenshots/profile.png"} image2={"./screenshots/editPets.png"} right={false} text={"Easily list your pet for adoption and share their details."}/>

    
    </div>
        
/* <p>

Petify is a user-friendly mobile app built with React Native, designed to help connect pet owners looking to rehome their pets with potential adopters. Whether you’re an owner who needs to find a loving home for your pet or someone looking to adopt a new furry friend, Petify provides a seamless platform for both.

Key Features:

Post Your Pet: Owners can easily create posts to showcase their pets available for adoption. They can include essential details like pet type, breed, age, health information, and photos, along with their contact information.
Discover Adoptable Pets: Users can browse through a list of pets available for adoption, complete with all the necessary details.
Connect with Owners: Potential adopters can directly contact pet owners through the app, making the adoption process smooth and efficient.
With Petify, you can ensure your pets find caring homes, or find your perfect companion in just a few clicks.
</p> */
  )
}

export default About