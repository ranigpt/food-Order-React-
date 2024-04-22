import React from 'react'

// const Profile = () => {
//   return (
//     <div>
//         <h1>Profile</h1>
//     </div>
//   )
// }

// export default Profile



class Profile extends React.Component{
    constructor(props){
        super(props)

        this.state={
           userInfo :"dummy",
           company:"dummy"
        }
    }

    async componentDidMount(){
        const data = await fetch("  https://api.github.com/users/ranigpt")
     const json = await data.json();
     this.setState({
        userInfo:json,
     })

    }
    render(){
        return <div className='m-4 mb-[21rem]'>
            <h2 className='text-xl font-semibold'> Your profile </h2>
            <h2 className='text-lg'>name : {this.state.userInfo.name}</h2>
            <h2>location : {this.state.userInfo?.company}</h2>
            <img src={this.state.userInfo?.avatar_url} className='w-52 h-52 object-cover rounded-full mt-3' />
            
        </div>
    }
}

export default Profile