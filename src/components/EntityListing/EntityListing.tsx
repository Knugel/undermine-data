import { Link, useRouteMatch } from "react-router-dom";
import Context from "../../store/Context";
import { FormEvent, Fragment, useContext, useState } from 'react';
import { Form, Table } from 'react-bootstrap';

function EntityListing() {
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
                    <th style={{ width: '40%' }}>Name</th>
                    <th style={{ width: '40%' }}>Guid</th>
                    <th style={{ width: '10%' }}/>
                </tr>
                </thead>
                <tbody>
                {
                    context.entities
                        .filter(x => x.Name.toLowerCase().includes(search.toLowerCase()) || x.Guid.includes(search))
                        .sort((a, b) => a.Name.localeCompare(b.Name))
                        .map(entity => {
                        return (
                            <tr key={ entity.Guid + entity.Name }>
                                <td style={{ width: '40%' }}>{ entity.Name }</td>
                                <td style={{ width: '40%' }}>{ entity.Guid }</td>
                                <td style={{ textAlign: 'center', width: '10%' }}>
                                    <Link to={ `${ match.path }/${ entity.Guid }/${ entity.Name }` }>{ "=>" }</Link>
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

export default EntityListing
