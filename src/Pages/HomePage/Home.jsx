import Table from '../../components/Table/Table'


const Homepage = ({users,setusers,form,setForm,mode,setMode}) => {
    return ( 
        <div>
            <Table  users={users} setusers={setusers} form={form} setForm={setForm} mode={mode} setMode={setMode} />
        </div>
     );
}
 
export default Homepage;

