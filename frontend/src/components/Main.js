/* import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import { API_URL } from '../utils/constants';

const Main = () => {
	const accessToken = useSelector((store) => store.user.accessToken);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate('/login');
		}
	}, [accessToken, navigate]);

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: {
				Authorization: accessToken,
			},
		};

		fetch(API_URL('foods'), options)
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					dispatch(foods.actions.setFoods(data.response));
					dispatch(thoughts.actions.setError(null));
				} else {
					dispatch(thoughts.actions.setFoods([]));
					dispatch(thoughts.actions.setError(data.response));
				}
			});
	}, [accessToken]);

	return (
		<div>
			<div>
				<Link to="/login">To '/login' !</Link>
			</div>
			
		</div>
	);
};

export default Main;
 */
