import { MovieDTO } from "../components/movies.model";

const movieList: MovieDTO[] = [
    {
        id: 1,
        title: "El Clan",
        director: "Pablo Trapero",
        isNational: true,
        poster: "https://imgs.search.brave.com/riRxA6MHc852NRvzeQpwHClZDLflmkBkVg06UDvk2mw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yNC5h/YmNpbWcuZXMvcmVz/aXplci9yZXNpemVy/LnBocD9pbWFnZW49/aHR0cHM6Ly9zMS5h/YmNzdGF0aWNzLmNv/bS9tZWRpYS9wZWxp/Y3VsYXMvMDAwLzAz/OC85MDQvZWwtY2xh/bi0yLmpwZyZudWV2/b2FuY2hvPTYyMCZt/ZWRpbz1hYmM"
    },
    {
        id: 2,
        title: "El Patron: Radiografía de un Crimen",
        director: "Sebastián Schindel",
        isNational: true,
        poster: "https://imgs.search.brave.com/5xGXR10z1O6B5kO12d2_lReacAYJz5EdieIcpP7vanY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2luZXNhcmdlbnRp/bm9zLmNvbS5hci9w/b3N0ZXIvNTg1MC1l/bC1wYXRyb25fMTY4/LmpwZz8xNDEyNzc0/NjI4"
    },
    {
        id: 3,
        title: "Inception",
        director: "Christopher Nolan",
        isNational: false,
        poster: "https://imgs.search.brave.com/rfLlz8adTYV7r_ULmGj3O5mcvaEOVcbeOBHnqjThX0M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL2luY2Vw/dGlvbl9rZXlhcnQu/anBn"
    },
    {
        id: 4,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        isNational: false,
        poster: "https://imgs.search.brave.com/ETuJ3EIrdbYbe1KoL0FnKLQWQQSUN-jwITFei7B_h-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF84/MTI0NDQtTUxVNzEx/MzUzNDQ4NjdfMDgy/MDIzLU8ud2VicA"
    },
    {
        id: 5,
        title: "Titanic",
        director: "James Cameron",
        isNational: false,
        poster: "https://imgs.search.brave.com/r0-mG7Z3FLc3xYJ8q1UahNfHpqi3gjjyLKQ6BlUt6qQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EZG1aR1Uz/TkRRdFkyRTVNeTAw/WlRsaUxXSXpPVFV0/TVRZNFpHSTFZamRp/TmprM1hrRXlYa0Zx/Y0dkZVFYVnlOVEE0/TnpZMU16WUAuanBn"
    },
    {
        id: 6,
        title: "Parasite",
        director: "Bong Joon-ho",
        isNational: false,
        poster: "https://imgs.search.brave.com/0k1Qq26p93lbJyVJTtiKdpbKk1EkTdqJkjNmcAOf5z8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzM3MzAyMDg5L3Iv/aWwvZTJmN2EwLzQy/Nzg4NDE5MjMvaWxf/NjAweDYwMC40Mjc4/ODQxOTIzX2QxZnUu/anBn"
    },
    {
        id: 7,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        isNational: false,
        poster: "https://imgs.search.brave.com/hYT9D4tssKRQw-TdZz0DvlJIS67NS-8332bLxRLmUO4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0yTXlOall4/Tm1VdFlUQXdOaTAw/TVRZeExXSm1OV1l0/WXpabE9EWTNaVGsz/T1RGbFhrRXlYa0Zx/Y0dkZVFYVnlOemt3/TWpRNU56TUAuanBn"
    },
    {
        id: 8,
        title: "Toy Story",
        director: "John Lasseter",
        isNational: false,
        poster: "https://imgs.search.brave.com/vN4AsFaJVofBNBKaOQYUWcr0T8ONgY10jUWvZgDTiPI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EVTJaV0ps/TWprdE1UUmhNeTAw/WlRBNUxXRXpORGd0/WW1ObVpURXdaVFZp/WldKa1hrRXlYa0Zx/Y0dkZVFYVnlORFEy/T1RrNE16SUAuanBn"
    },
    {
        id: 9,
        title: "Avatar",
        director: "James Cameron",
        isNational: false,
        poster: "https://imgs.search.brave.com/b2vSUXdSjgrye4m3YGpC8gvFZGnMf2EA0iZ7TIhAN7k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpEQTBPR1F4/TlRJdE1EWmtNQzAw/TjJVeUxUZzNNek10/WVRKbU5qZzNOems1/TXpSaVhrRXlYa0Zx/Y0dkZVFYVnlNalV6/T1RZMU5UY0AuanBn"
    },
    {
        id: 10,
        title: "Jurassic Park",
        director: "Steven Spielberg",
        isNational: false,
        poster: "https://imgs.search.brave.com/c-TaBEsFblyD_GH7OuaWkeFH82t1qXTiqij4tg2p3Kw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzAxL2p1cmFz/c2ljLXBhcmstMS5q/cGc"
    }
];

export default movieList;