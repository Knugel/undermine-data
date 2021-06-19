import { Link, useRouteMatch } from "react-router-dom";
import Context from "../../store/Context";
import { FormEvent, Fragment, useContext, useState } from 'react';
import { Form, Table } from 'react-bootstrap';

function DataObjectListing() {
    let match = useRouteMatch();
    const context = useContext(Context);
    const [search, setSearch] = useState<string>("");

    const onSearch = (event: FormEvent<any>) => {
        setSearch(event.currentTarget.value);
    }

    return (
        <Fragment>
            <Form style={{ padding: 20 }}>
                <Form.Control type="search" placeholder="Search..." value={search} onChange={onSearch}/>
            </Form>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Guid</th>
                    <th/>
                </tr>
                </thead>
                <tbody>
                {
                    context.dataObjects
                        .filter(x => x.Name.toLowerCase().includes(search.toLowerCase()))
                        .sort((a, b) => a.Name.localeCompare(b.Name))
                        .map(entity => {
                        return (
                            <tr key={ entity.Guid + entity.Name }>
                                <td>{ entity.Name }</td>
                                <td>{ entity.Guid }</td>
                                <td style={{ textAlign: 'center' }}>
                                    <Link to={ `${ match.path }/${ entity.Guid }` }>{ "=>" }</Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Fragment>
    );
}

export default DataObjectListing
