import java.util.Arrays;
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

    }
}

class Hey {
    public double square(double num) {
        return Math.pow(num, 2);
    }
}