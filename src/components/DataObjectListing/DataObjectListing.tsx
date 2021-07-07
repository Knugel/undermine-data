import { Link, useRouteMatch } from "react-router-dom";
import Context from "../../store/Context";
import { FormEvent, Fragment, useContext, useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';

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
            <div className={"table-wrapper"}>
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
                        context.dataObjects
                            .filter(x => x.Name.toLowerCase().includes(search.toLowerCase()) || x.Guid.includes(search))
                            .sort((a, b) => a.Name.localeCompare(b.Name))
                            .map(entity => {
                                return (
                                    <tr key={ entity.Guid + entity.Name }>
                                        <td style={{ width: '40%' }}>{ entity.Name }</td>
                                        <td style={{ width: '40%' }}>{ entity.Guid }</td>
                                        <td style={{ width: '10%', textAlign: 'center' }}>
                                            <Link to={ `${ match.path }/${ entity.Guid }` }><FontAwesomeIcon icon={faArrowRight} /></Link>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    );
}

export default DataObjectListing
