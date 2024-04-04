const header = React.createElement('h1',{
    id :'heading',
    xyz :'some attribute'
},"H1 Element using react cresate element");


const parent = React.createElement('div',{
    id : 'parent',
    'data-value' : 1
}, [
    React.createElement('div',{
        id :'child1',
        key:1
    },[
        React.createElement('h1',{ key : 1},'I am Child1 H1 Tag'),
        React.createElement('h2',{ key : 2},'I am Child1 H2 Tag')
    ]),
    React.createElement('div',{
        id :'child2',
        key:2
    },[
        React.createElement('h1',{key : 1},'I am Child2 H1 Tag'),
        React.createElement('h2',{key : 2},'I am Child2 H2 Tag')
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);