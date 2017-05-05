import Home from './components/Home.vue'
// import News from './components/News.vue'
// console.log(Home)
export default{
  mode: 'hash',
  base: "/" ,
  routes:[
    {path:'/home', component:Home}
    // {path:'/news', component:News},
    // {path:'*', redirect:'/home'}
  ]
}