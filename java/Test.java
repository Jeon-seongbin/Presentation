import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.*;
import java.util.stream.Collectors;

public class Test {
    public static void main(String[] args) {
        List<Integer> a = Arrays.asList(1, 2, 3, 4, 5);

        List<Integer> b = a.stream().filter(obj -> obj == 1).collect(Collectors.toList());
        Map<String, Integer> c = a.stream().filter(obj -> obj == 1)
                .collect(Collectors.toMap(obj -> "" + obj, obj -> obj));

        Map<String, Integer> d = a.stream().collect(Collectors.toMap(obj -> "" + obj, obj -> obj));

        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);

        Hey hey = new Hey();
        Function<Double, Double> square = hey::square;
        double ans = square.apply(23d);
        System.out.println(ans);

        // Get the stream
        Stream<String> stream = Stream.of("Geeks", "For", "Geeks", "A", "Computer", "Portal");

        // Print the stream
        // using double colon operator
        stream.forEach(System.out::println);

        ArrayList<Soccer> sList = new ArrayList<Soccer>();
        sList.add(new Soccer(1, "a"));
        sList.add(new Soccer(99, "b"));
        sList.add(new Soccer(3, "c"));
        sList.add(new Soccer(11, "a"));
        sList.add(new Soccer(5, "d"));

        Collections.sort(sList);

        for (Soccer s : sList) {
            System.out.println(s.getAge());
        }

        LinkedList<Soccer> sLinkedList = new LinkedList<Soccer>();

        sLinkedList.add(new Soccer(3, "aa"));
        sLinkedList.add(new Soccer(4, "bc"));
        sLinkedList.add(new Soccer(5, "cd"));
        sLinkedList.add(new Soccer(6, "ae"));
        sLinkedList.add(new Soccer(7, "df"));

        Iterator<Soccer> i = sLinkedList.descendingIterator();

        while (i.hasNext()) {
            Soccer temp = i.next();
            System.out.println("age : " + temp.getAge() + " name : " + temp.getName());
        }

        ArrayList<Team> s1List = new ArrayList<Team>();
        Team t = new Team();
        t.setTeam("a");
        t.setWinNumber(1);
        s1List.add(t);
        t = new Team();
        t.setTeam("b");
        t.setWinNumber(2);
        s1List.add(t);

        t = new Team();
        t.setTeam("c");
        t.setWinNumber(3);
        s1List.add(t);
        t = new Team();
        t.setTeam("d");
        t.setWinNumber(4);
        s1List.add(t);
        t = new Team();
        t.setTeam("e");
        t.setWinNumber(5);
        s1List.add(t);
        t = new Team();
        t.setTeam("f");
        t.setWinNumber(6);
        s1List.add(t);
        t = new Team();
        t.setTeam("g");
        t.setWinNumber(7);
        s1List.add(t);

        for (Team t1 : s1List) {
            System.out.println(t1.getTeam());
        }

        Collections.sort(s1List, new Comparator<Team>() {
            @Override
            public int compare(Team t1, Team t2) {
                System.out.println("t1 : " + t1.getTeam() + "  t2 : " + t2.getTeam());

                if (t1.getWinNumber() < t2.getWinNumber()) {
                    return 1;
                } else if (t1.getWinNumber() > t2.getWinNumber()) {
                    return -1;
                }
                return 0;
            }
        });
        for (Team t1 : s1List) {
            System.out.println(t1.getTeam());
        }

    }
}

class Hey {
    public double square(double num) {
        return Math.pow(num, 2);
    }
}