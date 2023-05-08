import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoadingMeals, setIsLoadingMeals] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-http-d23f9-default-rtdb.firebaseio.com/meals.json');

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedMeals = [];

                for(const key in responseData) {
                    loadedMeals.push({
                        id: key,
                        ...responseData[key]
                    })
                }

                setMeals(loadedMeals);
                setIsLoadingMeals(false);
        }

        fetchMeals().catch((error) => {
            setIsLoadingMeals(false);
            setHttpError(error.message);
        });
    }, []);

    if(isLoadingMeals) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if(httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        )
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
