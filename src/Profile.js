import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
        name: "Michael Phelps",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ipsam doloremque similique recusandae officia ea dolore deleniti facilis, fugit dolores ut. Ea atque repellendus culpa suscipit, laudantium consectetur totam cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi reiciendis sint repellendus ipsa autem! Temporibus ratione perferendis non vel",
        profession : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, eligendi? Officia quia repudiandae quisquam accusantium, iure dignissimos impedit nesciunt itaque. Autem libero illo optio distinctio itaque quia, vel, ducimus inventore consectetur accusantium magnam a Pariatur est molestiae nihil debitis repellat, ipsam earum in excepturi ratione recusandae provident amet dignissimos. Illum, quidem fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam reiciendis animi fugiat eveniet! Deleniti, doloribus ut? Tempore nobis blanditiis vitae.",
        image :'./imageInSrc.jpeg',
      
      };
  render() {
    return (
        <div className="">
        <h1>hello {this.state.name}</h1>
   <img className='img' src={this.state.image} alt="" />
   <h3 >my biographie</h3>
   <span className='bio'>{this.state.bio}</span>
   <h3 >my profession</h3>
   <p className='profession' >{this.state.profession}</p>
   </div>
    )
  }
}
