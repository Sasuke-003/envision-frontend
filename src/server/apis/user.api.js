import axios from "axios";

const url = {
    signUp: "/user/sign-up",
    signIn: "/user/sign-in",
};

export const user = {
    signUp: async (signUpData) => {
        return await axios.post(url.signUp, signUpData);
    },

    signIn: async (signInData) => {
        const res = await axios.post(url.signIn, signInData);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.accTok}`;
        return res;
    },

};

setTimeout( async () => {
    console.log( await user.signIn({
        email: "a@gmail.com",
        pass: "admin999",
    }) )
    console.log( await axios.post( "/department/add", { code: "LOL", name: "Comp" } ) );
}, 2000 );