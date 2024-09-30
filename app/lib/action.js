 'use server'
 
import User from '@/app/models/User'
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';

const createUser = async user => {

    const name = user.get('name')
    const email = user.get('email')  

    const password = await bcrypt.hash(user.get('password'), 10);    
    let newUser = await User.findOne({ email });

    if (newUser) {
        redirect('/error');
    }
    else{
        newUser = new User({ name, email, password });
    await newUser.save();
    redirect('/success');
    }
}

const getUser = async user => {
    
    const email = user.get('email');    
    const password = user.get('password');
    
    const query = { email: email };    
    const newUser = await User.findOne(query);
    const isMatch = await bcrypt.compare(password,newUser.password);

    if(isMatch){
        redirect('/success');
    }
    else {
        redirect('/error');  
    }
}

export { createUser, getUser }