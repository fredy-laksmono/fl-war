# FL-War Design document

## Component Hierarchy Diagram
[Component Hierarchy Diagram](https://lucid.app/lucidchart/f9aad8ca-5ea8-4a9f-a046-494960847ead/edit?beaconFlowId=8B96EFD03984FF48&invitationId=inv_751c627b-3f60-48df-a0c1-a42624c4aa20&page=0_0#)
![Component Hierarchy Diagram](./Assets/chd.png)

## Entity Relationship Diagram
[Entity Relationship Diagram](https://lucid.app/lucidchart/05d518ab-381b-47c5-bbfc-38a308cae342/edit?beaconFlowId=96E5F1AA5443198A&page=0_0&invitationId=inv_6c3e2cc7-2346-4632-b24c-170bea3b9915#)
![Entity Relationship Diagram](./Assets/erd.png)

## Psudo Code

### Home Screen
If param player id valid
    show home with ability to manage deck, create game & find game
    access to about page
else
    show create user so they get their own unique url with their id
    access to aboutpage

### Home Screen with user id param
If manage deck click
    if no deck associated
        start deck creation 
            Select Race (Race selection is permanent, to change, need to delete the deck)
                show 5 slots (3 for attacking unit, 2 for defensive unit)
                each race will have at least 5 diff. attacking unit and 4 diff. defensive unit
                They can submit and save the deck associate to their user id (Create Operation, Post)
                    return user to if manage deck click condition

    else if deck associated
        if manage deck selected
            show current deck setup
                allow update on current selection 
                They can submit to confirm update their deck (Update Operation, Put)
                    return user to if manage deck click condition

        else if delete deck selected
            provide confirmation
                if confirm, delete the deck
                    return user to if manage deck click condition

if play now selected
    if create game selected
        create a new game session
            route user to game route with aram game object id and current user object id
                As owner, user can see simplified game id and share the game id to opponent irl


    else if find game selected
        type in game id and submit 
            if valid
                route user to game route with param game object id and current user object id

In game session (player interaction)
    if all players not ready
        allow and wait for all players to click ready
    
    else if all players ready
        Start timer, per round is x seconds
            in x seconds, player need to click their builder
                build units up to 3 at a times
                move once
                attack once
                 player need to refresh the page manually once timer run out to go to next round
        if player units/builder on the edge allow them to go to next grid

In game mechanic
    once round timer run out, start new time and all used activity on unit is reset and available for use
    
    Each unit can attack once. If not attack, unit can move once.

    Unit can attack any enemy unit in the same grid

    attack phase > move phase
        if unit not killed during attack phase, they can move to their destination.

        unit can kill each other if each attack resulting in zero hp to each other

    builder is protected from attack as long as there is at least two units in the grid

    if two unit will clonfict for a space, move is canceled, attack phase is triggered. This attack phase also triggered when unit attempted to move between grid which resulting colusion.
        two unit can switch space without attacking each other

    Player can only see enemy unit if they have unit/powered defensive in the grid

    defensive unit is active (powered) when builder is in the same grid or adjacent grid (diagonal count)
    defensive unit can only be build on specific location
    no defensive unit allow on gridCM

    unit cannot move diagonally when jumping between grid

    each grid will have one harvester
        harvester need to be claim in order to be active
            user need to have a unit/builder in adjacent space in order to claim (use attack slot)
        harvester can only be claim when there is no enemy builder/unit/active defensive unit in the grid
        harvester give player x money and y point per round
        harvester does not provide vision
        harvester always active and give benefit to player who claim it until it is claimed by enemy player

    shield unit will be replenished to max after two rounds not attacked
    
    regen unit always regen 20% of health each round

Game end
    player lose the builder
    round reach limit
    point reach limit

Race core specialty
    race 1
        medium hp
        medium armor
        medium attack
        min shield unit
        min regen unit
        medium cost
    race 2
        high hp
        high armor
        high attack
        no shield unit
        no regen
        high cost
        slow build
    race 3
        low hp
        low armor
        all shield unit
        high attack
        no regen
        high cost
    race 4
        medium hp
        no armor
        no shield
        medium damage
        all regen unit
        low cost
        fast build






    


